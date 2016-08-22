export class Post{
    constructor(
        public content: string,
        public parent: number,
        public children: number[],
        public timestamp: string,
        public _id?: number
        ){}
}