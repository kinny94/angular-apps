export interface Question {
    tags: Tag[];
    owner: Owner;
    is_answered: boolean;
    view_count: number;
    bounty_amount: number;
    bounty_closes_date: Date;
    answer_count: number;
    score: number;
    question_id: number;
    title: string;
    link: string;
}

export interface Owner {
    reputation: string;
    user_id: string;
    user_type: string;
    profile_image: string;
    display_name: string;
    link: string;
}

export interface Tag {
    tag: string;
}