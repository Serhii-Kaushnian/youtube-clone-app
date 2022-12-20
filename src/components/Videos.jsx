import React, { useEffect, useState } from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    if (videos) {
      const filteredVid = videos.filter((item) => item?.id?.videoId || item?.id?.channelId);
      setFilteredVideos(filteredVid);
      console.log("filteredVid: ", filteredVid);
    }
  }, [videos]);

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      {filteredVideos &&
        filteredVideos.map((item, idx) => (
          <Box key={idx}>
            {item?.id?.videoId && <VideoCard video={item} />}
            {item?.id?.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))}
    </Stack>
  );
};

export default Videos;
