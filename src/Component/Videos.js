import React, { useState } from "react";
import { Link } from "react-router-dom";
import useVideoList from "../Hooks/useVideoList";
import Video from "./Video";
import InfiniteScroll from "react-infinite-scroll-component";
export default function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          loader="loading..."
          next={() => setPage(page + 8)}
        >
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link to="/quiz" key={video.youtubeID}>
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                ></Video>
              </Link>
            ) : (
              <Video
                title={video.title}
                id={video.youtubeID}
                noq={video.noq}
              ></Video>
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div>No data avilable</div>}
      {error && <div>There was a error</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
}
