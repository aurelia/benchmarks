import {userAgent} from '../util/user-agent';

export class ResultFactory {
  fromScore(name, period) {
    return {
      name: name,
      timestamp: new Date(),
      userAgent: userAgent,
      period: period,
      tag: ''
    }
  }
}
