import { TweenMax } from 'gsap';

const duration = 0.5;

export default {
  show(target, cb) {
    return TweenMax
      .form(target, duration, {
        opacity: 0,
        height: 0,
        onComplete() {
          cb()
        }
      })
  },
  hide(target, cb) {
    return TweenMax
      .to(target, duration, {
        opacity: 0,
        height: 0,
        onComplete() {
          cb()
        }
      })
  }
}
