import {StatusAttachedBehavior} from './statusAttachedBehavior'

function install(aurelia) {
    aurelia.withResources([StatusAttachedBehavior]);
}

console.log(StatusAttachedBehavior);

export {
    StatusAttachedBehavior,
    install
}
