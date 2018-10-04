import AskEntity from '../entity/ask.entity';
import MsgEntity from '../entity/msg.entity';

/**
 * @file 实体类型
 */

export enum EntityType {
    tigger = 'ENTITY-TRIGGER',
    ask = 'ENTITY-ASK',
    message = 'ENTITY-MESSAGE',
    chat = 'ENTITY-CHAT',
    hidden = 'ENTITY-HIDDEN'
}

export function getEntity(type?) {
    switch (type) {
        case 'ENTITY-TRIGGER':
            return MsgEntity;
        case 'ENTITY-MESSAGE':
            return MsgEntity;
        case 'ENTITY-ASK':
            return AskEntity;
        case 'ENTITY-CHAT':
            return AskEntity;
        case 'ENTITY-HIDDEN':
            return AskEntity;
        default:
            return MsgEntity;
    }
}

// TODO: 生成为画布实体唯一id
let uid = 0;
export function getEntityId() {
    return `entity_id_${uid++}`;
}