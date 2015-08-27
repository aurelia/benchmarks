import {HttpClient} from 'aurelia-http-client';
import {inject} from 'aurelia-dependency-injection';
import {ResultFactory} from './result-factory';
import {userAgent} from '../util/user-agent';
import {parseJson} from '../util/parse-json';

@inject(HttpClient, ResultFactory)
export class ResultRepository {
  results = {};
  tags = [];
  userAgents = [userAgent];

  constructor(http, resultFactory) {
    this.http = http;
    this.resultFactory = resultFactory;
  }

  async load() {
    //let tags = localStorage.getItem('tags');
    let message = await this.http.get('/api/tags');
    let tags = parseJson(message.response);
    if (!tags) {
      return;
    }
    tags.sort((a, b) => a.timestamp - b.timestamp);
    for(let i = 0; i < tags.length; i++) {
      this.add(tags[i]);
    }
  }

  add(result) {
    let results = this.results;
    let name = result.name;
    let userAgent = result.userAgent;

    // graph of all results
    if (!results[name]) {
      results[name] = {};
    }
    if (!results[name][userAgent]) {
      results[name][userAgent] = [result];
    } else {
      let subset = results[name][userAgent];
      // already cataloged?
      if (subset.find(r => +r.timestamp === +result.timestamp)) {
        return;
      }
      subset.unshift(result);
    }

    // array of tags
    if (result.tag) {
      this.tags.push(result);
    }

    // list of userAgents
    if (this.userAgents.indexOf(userAgent) === -1) {
      this.userAgents.push(userAgent);
    }
  }

  async tag(names, tag) {
    let toTag = [], result, name;
    for(let i = 0; i < names.length; i++) {
      // Get the most recent result.  If it's already tagged, skip it.
      name = names[i];
      if (!this.results[name] || !this.results[name][userAgent] || !(result = this.results[name][userAgent][0]) || result.tag) {
       continue;
      }
      result.tag = tag;
      toTag.push(result);
    }
    let message = await this.http.get('/api/tags');
    let tags = parseJson(message.response);
    tags = tags.concat(toTag);
    await this.http.post('/api/tags', tags);
  }
}
