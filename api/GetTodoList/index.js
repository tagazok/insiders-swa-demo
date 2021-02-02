module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    
    const responseMessage =  [
         { Title : "Get up (not too early)", IsCompleted : false},
         { Title : "Take a good breakfast (hot chocolate please ☕) with croissants", IsCompleted : false},
         { Title : "Read emails (just the important ones)", IsCompleted : true},
         { Title : "Go back to bed (it's almost nap time)", IsCompleted : false},
    ];
 
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}