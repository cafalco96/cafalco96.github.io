const url =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCyKQS3QDtCt__Qr-rKWCQQw&part=snippet%2Cid&order=date&maxResults=50";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7212328c65msh99f35d0823180efp13bad7jsnce82a0513a6e",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const videosContainer = null || document.querySelector("#container-videos");
async function fetchData(url) {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}
(async () => {
  try {
    const videos = await fetchData(url);
    let view = `
    ${videos.items
      .map(
        (video) => `
    <div>
    <a href="https://www.youtube.com/watch?v=${video.id.videoId} target="_blank>
           <img class="grid-projects-certificates__image" src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" />
           <p class="grid-projects-certificates__title">
                ${video.snippet.title}
              </p>
              </a>
      </div>
          
    `
      )
      .slice(0, 3)
      .join("")}
          `;
    videosContainer.innerHTML = view;
  } catch (error) {
    videosContainer.innerText = "Sorry we have some problems now";
    console.log(error);
  }
})();
