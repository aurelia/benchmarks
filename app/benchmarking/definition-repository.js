import {Definition} from './definition';
import {type} from './type';
import {HttpClient} from 'aurelia-http-client';
import {inject} from 'aurelia-dependency-injection';
import {parseJson} from '../util/parse-json';

@inject(HttpClient)
export class DefinitionRepository {
  definitions = null;

  constructor(http) {
    this.http = http;
  }

  load() {
    return this.http.get('/api/tests')
      .then(message => {
        let result = parseJson(message.response);

        this.definitions = result.micro.map(name => new Definition(name, type.micro))
          .concat(result.macro.map(name => new Definition(name, type.macro)));
      });
  }
}
