module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const responseMessage =  [
         { Title : "Get up", IsCompleted : false},
         { Title : "Take breakfast", IsCompleted : false},
         { Title : "Read emails", IsCompleted : true},
         { Title : "Go back to bed", IsCompleted : false},
    ];
 
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}