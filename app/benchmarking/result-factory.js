import {userAgent} from '../util/user-agent';

export class ResultFactory {
  fromMeasures(name, measures) {
    let deltas = measures.heapDeltas.filter(x => x >= 0); // filter out drops due to GC
    let averageHeapDelta = deltas.length ? Math.floor(deltas.reduce((a, b) => a + b) / deltas.length) : 0;
    return {
      name: name,
      timestamp: new Date(),
      userAgent: userAgent,
      period: measures.period,
      heapDelta: averageHeapDelta,
      tag: ''
    }
  }
}
