import {
    Column, Entity, JoinColumn, ManyToOne,
} from 'typeorm';

import { CommonFields } from './commonFields';
import { Post } from './post';
import { User } from './user';

export interface IComment {
    text: string;
    authorId: number;
    postId: number;
    like: number;
    dislike: number;
}

@Entity('comments', { database: 'okten' })
export class Comment extends CommonFields implements IComment {
    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        text: string;

    @Column({
        type: 'int',
    })
        authorId: number;

    @Column({
        type: 'int',
    })
        postId: number;

    @Column({
        type: 'int',
    })
        like: number;

    @Column({
        type: 'int',
    })
        dislike: number;

    @ManyToOne(() => User, (user) => user.posts)
    @JoinColumn({ name: 'authorId' })
        user:User;

    @ManyToOne(() => Post, (post) => post.comments)
    @JoinColumn({ name: 'postId' })
        post: Post;
}
