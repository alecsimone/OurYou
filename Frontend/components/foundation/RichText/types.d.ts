type TagName =
  | 'bars'
  | 'code'
  | 'pounds'
  | 'quote'
  | 'slashes'
  | 'stars'
  | 'rawStyle'
  | 'summarizedText'
  | 'summary'
  | 'url'
  | 'twitterMention'
  | 'email';
export type { TagName };

interface CustomMatchObj {
  start: number;
  end: number;
  content: string;
  fullTag?: string;
  tag: TagName | TagName[];
  extraGroups?: {
    [key: string]: any;
  };
}
export type { CustomMatchObj };
