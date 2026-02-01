(function () {
  "use strict";

  const DELAY_BETWEEN_STOPS = 2000; // 2 giây giữa mỗi ô dừng
  const TOTAL_DIGITS = 9;

  function getDigitHeight() {
    var first = digitEls[0];
    if (first && first.firstElementChild) {
      return first.firstElementChild.getBoundingClientRect().height;
    }
    return 54;
  }

  const digitEls = [
    document.getElementById("digit-0"),
    document.getElementById("digit-1"),
    document.getElementById("digit-2"),
  ];
  const finalResultEl = document.getElementById("final-result");
  const btnStart = document.getElementById("btn-start");
  const btnStop = document.getElementById("btn-stop");

  let isSpinning = false;
  let spinIntervals = [null, null, null];
  let currentStopIndex = 0;
  let finalValues = [null, null, null];

  function getRandom1To9() {
    return Math.floor(Math.random() * 9) + 1;
  }

  function getYForDigit(digit) {
    var h = getDigitHeight();
    var index = (digit - 1) % TOTAL_DIGITS;
    return -index * h;
  }

  function spinSlot(index) {
    const el = digitEls[index];
    if (!el) return;
    let step = 0;
    spinIntervals[index] = setInterval(function () {
      step++;
      const randomDigit = (step % TOTAL_DIGITS) + 1;
      el.style.transition = "none";
      el.style.transform = "translateY(" + getYForDigit(randomDigit) + "px)";
    }, 80);
  }

  function stopSlot(index, callback) {
    const el = digitEls[index];
    if (!el) {
      if (callback) callback();
      return;
    }

    clearInterval(spinIntervals[index]);
    spinIntervals[index] = null;

    const finalDigit = getRandom1To9();
    finalValues[index] = finalDigit;

    el.style.transition = "transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)";
    el.style.transform = "translateY(" + getYForDigit(finalDigit) + "px)";

    setTimeout(function () {
      updateFinalResult();
      if (callback) callback();
    }, 850);
  }

  function updateFinalResult() {
    const str = finalValues
      .map(function (v) {
        return v === null ? "-" : v;
      })
      .join("");
    finalResultEl.textContent = str;
    if (str !== "---") {
      finalResultEl.classList.add("has-result");
    } else {
      finalResultEl.classList.remove("has-result");
    }
  }

  function startSpinning() {
    if (isSpinning) return;
    isSpinning = true;
    currentStopIndex = 0;
    finalValues = [null, null, null];
    finalResultEl.textContent = "---";

    btnStart.disabled = true;
    btnStop.disabled = false;

    digitEls.forEach(function (el) {
      el.style.transition = "none";
      el.style.transform = "translateY(0)";
    });

    digitEls.forEach(function (_, i) {
      spinSlot(i);
    });
  }

  function onStopClick() {
    if (!isSpinning || currentStopIndex > 0) return;
    btnStop.disabled = true;
    currentStopIndex = -1;

    function stopNext() {
      currentStopIndex++;
      if (currentStopIndex >= 3) {
        isSpinning = false;
        btnStart.disabled = false;
        btnStop.disabled = true;
        return;
      }
      stopSlot(currentStopIndex, function () {
        if (currentStopIndex < 2) {
          setTimeout(stopNext, DELAY_BETWEEN_STOPS);
        } else {
          isSpinning = false;
          btnStart.disabled = false;
          btnStop.disabled = true;
        }
      });
    }
    stopNext();
  }

  btnStart.addEventListener("click", function () {
    startSpinning();
  });

  btnStop.addEventListener("click", function () {
    if (currentStopIndex >= 3) return;
    onStopClick();
  });
})();
