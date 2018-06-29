declare module "postcss-nested" {
    import { Plugin, Transformer } from "postcss";

    interface Options {
    }

    interface PostcssNested extends Plugin<Options> {
        (opts?: Options): Transformer;
    }

    const postcssNested: PostcssNested;
    export default postcssNested;
}
