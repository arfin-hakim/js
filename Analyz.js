/*
Name                    : skin player 1
Publish By		: skindezign
Publish URL		: skindezign.blogspot.com
Publish On		: 18 Februari 2018
Thanks to               : All supported
License                 : Public version - Free for non-commercial uses.
*/
var skin = document.getElementById('skindezign');
            var skin_play = document.getElementById('skin_play');
            var skin_pause = document.getElementById('skin_pause');
            var skin_stop = document.getElementById('skin_stop');
            var progres = document.getElementById('progres');

    progres.width = window.innerWidth;
    progres.height = window.innerHeight;
    var ctx = progres.getContext("2d");

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 2.5;
    var barHeight;
    var x = 0;

            skin_play.disabled = false;
            skin_pause.disabled = true;
            skin_stop.disabled = true;
            function play() {
                skin.play();
                skin_play.disabled = true;
                skin_pause.disabled = false;
                skin_stop.disabled = false;
                update();
            }
            function pause() {
                skin.pause();
                skin_play.disabled = false;
                skin_pause.disabled = true;
                skin_stop.disabled = false;
                update();
            }
            function stop() {
                skin.pause();
                skin.currentTime = 0;
                skin_play.disabled = false;
                skin_pause.disabled = true;
                skin_stop.disabled = true;
                update();
            }
    function renderFrame() {
      requestAnimationFrame(renderFrame);

      x = 0;

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        
        var r = barHeight + (25 * (i/bufferLength));
        var g = 250 * (i/bufferLength);
        var b = 50;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    }

    audio.play();
    renderFrame();
  };
            }
