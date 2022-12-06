import { ArticleBase } from './article-base';

export class TopicDropdown extends ArticleBase<string> {
    override controlType = 'dropdown';
}