import {Resource, ResourceType} from '../resource';

export enum ItemType {
  Undefined = 'Undefined',
  Head = 'Head',
  Body = 'Body',
  Feet = 'Feet',
  OneHand = 'OneHand',
  TwoHands = 'TwoHands',
  Small = 'Small',
}

export enum ItemUsageType {
  Undefined = 'Undefined',
  Passive = 'Passive',
  Spent = 'Spent',
  Consumed = 'Consumed',
  Flip = 'Flip',
}

export class Item {
  id: number = 0;
  name: string = '';
  description: string = '';
  type: ItemType = ItemType.Undefined;
  usageType: ItemUsageType = ItemUsageType.Undefined;
  items: number[] = []
  resources: Map<ResourceType, number> = new Map()
}
