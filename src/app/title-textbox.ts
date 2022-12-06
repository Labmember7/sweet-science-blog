import { ArticleBase } from './article-base';

export class TitleTextbox extends ArticleBase<string> {
    override controlType = 'textbox';
}