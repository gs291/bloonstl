import styled from "@emotion/styled";


const VideoSectionContainer = styled("div")`
  width: 100%;
  margin-bottom: 5em;
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

/**
 * Home page introduction video section
 */
export default function VideoSection() {

    return (
        <>
            <VideoSectionContainer>
                <VideoContainer>
                    <Video
                        width="1280"
                        height="720"
                        src="https://www.youtube.com/embed/TJUhtuGizX8"
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