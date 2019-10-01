import { ActorSkillMixin } from '../mixins/ActorSkillMixin.js';
import ActorStatistic from '../classes/ActorStatistic.js';


export default class ActorCharacteristic extends ActorSkillMixin(ActorStatistic) {
  constructor({ actor } = {}) {
    super({ actor: actor});
    this.maximum = 1;
    this.current = 1;
    this.minimum = 1;
  };
};
