const videos = [{
    id: 65432445,
    title: "The Chamber"
}, {
    id: 675465,
    title: "Fracture"
}, {
    id: 70111470,
    title: "Die Hard"
}, {
    id: 654356453,
    title: "Bad Boys"
}];

const transformedVideos = videos.reduce((acc, video) => ({
    ...acc,
    [video.id]: video.title
}), {})
