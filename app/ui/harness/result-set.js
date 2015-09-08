import {bindable, customElement} from 'aurelia-framework';

@customElement('result-set')
export class ResultSet {
  @bindable results;

  getTextClass(result, field) {
    let change = this.compare(result, field);
    return !change || change.same ? 'text-muted' : (change.improved ? 'text-success' : 'text-danger');
  }

  compare(result, field) {
    var previous = this.getPrevious(result);
    if (previous) {
      let p = (result[field] - previous[field]) / previous[field] * 100;
      return {
        same: Math.abs(p) <= 15,
        improved: p < -15,
        percentImprovement: p
      }
    }
    return null;
  }

  getPrevious(result) {
    let i = this.results.indexOf(result);
    return this.results[i + 1];
  }
}
