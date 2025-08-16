const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    if(ctx.path === "/") {
        ctx.body = '<h1> Welcome to Index page :)</h1>';
    } else if (ctx.path === "/about") {
        ctx.body = '<h1> Welcome to About page :)</h1>';
    } else if (ctx.path === "/contact") {
        ctx.body = '<h1> Welcome to Contact page :)</h1>';
    } else if (ctx.path === "/favicon.ico") {
        ctx.status = 204;
    } else {
        ctx.status = 404;
        ctx.body = "<h1> You found our 404 page its a miracle :)</h1>";
    }
});


const port = 3000;

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`)
});