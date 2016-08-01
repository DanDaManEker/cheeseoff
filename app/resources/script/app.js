// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//how do i embedd the listtype to search, can't find it
// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
        height: '390',
        width: '640',
        videoId: 'PGNiXGX2nLU'
    });
}
function searchByKeyword() {
    var request = gapi.client.youtube.search.list({
        q: 'dogs',
        part: 'snippet'
    });

    request.execute(function(results) {
        for(var i in results.items) {
            var item = results.items[i];
            console.log('[%s] Title: %s', item.id.videoId,item.snippet.title);
        }
    });
}
