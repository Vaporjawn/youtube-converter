import ffmpeg from 'fluent-ffmpeg';
import binaries from 'ffmpeg-static';

const appContainer = () => {
  const convertMp4ToMp3 = (paths: { filePath: any }) => {
    // Tell the user we are starting to convert the file to mp3.
    // this.setState({ progressMessage: 'Converting...', progress: 0 });

    return new Promise((resolve, reject) => {
      // Reset the rate limiting trigger just encase.
      let rateLimitTriggered = false;

      // Pass ffmpeg the temp mp4 file. Set the path where is ffmpeg binary for the platform. Provided desired format.
      ffmpeg(paths.filePath)
        // .setFfmpegPath(binaries.ffmpegPath())
        .format('mp3')
        // .audioBitrate(this.state.bitrate)
        .on('progress', (progress: { percent: number }) => {
          // Use same rate limiting as above in function "getVideoAsMp4()" to prevent UI lag.
          if (!rateLimitTriggered) {
            // this.setState({ progress: Math.floor(progress.percent) });
            // rateLimitstart of working containerTriggered = true;
            setTimeout(() => {
              rateLimitTriggered = false;
            }, 800);
          }
        })
        // .output(
        //   fs.createWriteStream(
        //     path.join(paths.folderPath, sanitize(paths.fileTitle))
        //   )
        // )
        // .on('end', () => {
        //   // After the mp3 is wrote to the disk we set the progress to 99% the last 1% is the removal of the temp file.
        //   this.setState({ progress: 99 });
        //   resolve();
        // })
        .run();
    });
  };
};
export default appContainer;
