import styled from "@emotion/styled";


const VideoSectionContainer = styled("div")`
  width: 100%;
  margin-bottom: 30px;
`;

const VideoContainer = styled("div")`
  width: 100%;
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  
  border-radius: 20px;
`;

const Video = styled("iframe")`
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
`;

export default function VideoSection() {

    return (
        <>
            <VideoSectionContainer>
                <VideoContainer>
                    <Video
                        width="1280"
                        height="720"
                        src="https://www.youtube.com/embed/EqboAI-Vk-U"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </VideoContainer>
            </VideoSectionContainer>
        </>
    );
}