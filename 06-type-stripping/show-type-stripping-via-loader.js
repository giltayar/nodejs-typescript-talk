import {registerHooks} from 'node:module';

registerHooks({
  load: (url, context, nextLoad) => {
    const ret = nextLoad(url, context)

    console.log(ret.source)

    return ret;
  }
})

await import('./main.ts')