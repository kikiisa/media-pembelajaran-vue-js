import ClickAudio from "../sound/click.wav"
const audio = new Audio(ClickAudio);
export function navigate(r:any,url:string) {
  audio.play();
  return r.push(url);
}

export function navigateHref(url:string)
{
  audio.play();
  return url;
}