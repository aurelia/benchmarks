import {userAgent} from '../util/user-agent';

export class ResultFactory {
  fromMeasures(name, measures) {
    let deltas = measures.heapSizeDeltas.filter(x => x >= 0); // filter out drops due to GC
    let averageHeapSizeIncrease = deltas.length ? deltas.reduce((a, b) => a + b) / deltas.length : 0;
    return {
      name: name,
      timestamp: new Date(),
      userAgent: userAgent,
      period: measures.period,
      heapSize: averageHeapSizeIncrease,
      tag: ''
    }
  }
}
