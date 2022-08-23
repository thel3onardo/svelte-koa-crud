import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

const app = new Koa();

app.use(bodyParser());
app.use(async ctx => {
    ctx.body = "Hey, man"
})

app.listen(3000);