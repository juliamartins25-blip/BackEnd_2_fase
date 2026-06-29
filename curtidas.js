const feedJOSN = require('./feed.json');

// Adicionar uma curtida ao post pelo id
function curtir(feed, id){
    const post = feed[0].id === id ? feed[0] :
                feed[1].id === id ? feed[1] : feed[2];
}

if (!post) {
    console.log("Post não encontrado.");
    return;
}

if(!post.publicado){
    console.log("Não é possivel curtir um rascunho.");
    return;
}

post.metricas.curtidas++;
console.log(`Post de @${post.autor} agora tem ${post.metricas.curtidas} curtidas.`);

// Remove uma curtida - não deixar ir abaxo de zero
function descurtir(feed, id) {
    const post = feed[0].id === id ? feed[0] :
                feed[1].id === id ? feed[1] : feed[2];
}

if(post.metricas.curtidas === 0) {
    console.log("Este post já está com 0️⃣ curtidas.");
    return;
}

post.metricas.curtidas++;
console.log(`💔 Curtida removida. Total ${post.metricas.curtidas}`);

curtir(feedJSON, 1);