import React from "react";

const PostCard = () => {
  return (
    <div className="lg:w-[80%] mx-auto my-10 py-10 border border-text-gray-500 rounded-lg">
      <article className="rounded-t-xl cursor-pointer px-5 pt-4 pb-3 transition-colors">
        <div className="flex items-start space-x-3">
          <p className="contents" href="/u/eduardmsmr">
            <img
              alt=""
              className="size-11 z-[1] cursor-pointer rounded-full border bg-gray-200"
              height="44"
              loading="lazy"
              src="https://ik.imagekit.io/lens/media-snapshot/tr:w-350,h-350/d1c5c9c8026d811e0a7a5cd011afa171ce9ca315afb579cb42d60c37c05c4841.jpg"
              width="44"
            />
          </p>

          <div className="w-[calc(100%-55px)]">
            <div className="flex w-full items-start justify-between">
              <div className="flex flex-wrap items-center gap-x-1">
                <span className="font-semibold">Eduard🌹</span>
                <span className="text-gray-500 text-sm">@eduardmsmr</span>
                <span className="mr-1 text-xs text-gray-500">· 1H</span>
              </div>

              <div className="relative">
                <button
                  aria-label="More"
                  className="rounded-full p-1.5"
                  type="button"
                >
                  ⋯
                </button>
              </div>
            </div>

            <div className="md:w-[50%]">
              <div className="break-words text-md">
                <p>
                  Fuck the big brands that overlooked your talent. Fuck the
                  expensive schools you're expected to attend. Fuck the pressure
                  to obtain certifications for validation.
                </p>
                <p>
                  If you aspire to become the next Demna, explore the world of
                  digital fashion.
                </p>
                <p>It's your gateway to the industry.</p>
                <p>Design. Build a community. Create a brand.</p>
                <p>Shape the future of fashion🌹</p>
              </div>
            </div>

            <span className="mt-3 flex w-full flex-wrap items-center justify-between gap-3">
              <span className="flex items-center gap-x-6">
                <div className="text-gray-500 flex items-center space-x-1">
                  <button
                    aria-label="Comment"
                    className="rounded-full p-1.5 outline-offset-2 hover:bg-gray-300/20"
                    type="button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="w-[15px] sm:w-[18px]"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"></path></svg>
                  </button>
                  <span className="text-[11px] sm:text-xs">2</span>
                </div>

                <div className="flex items-center space-x-1">
                  <div className="relative" data-headlessui-state="">
                    <button
                      aria-label="Mirror"
                      className="text-gray-500 p-1.5 outline-offset-2"
                      type="button"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="w-[15px] sm:w-[18px]"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"></path></svg>
                    </button>
                  </div>
                  <span className="text-gray-500 text-[11px] sm:text-xs">
                    140
                  </span>
                </div>

                <div className="text-gray-500 flex items-center space-x-1">
                  <button
                    aria-label="Like"
                    className="text-gray-500"
                    type="button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="w-[15px] sm:w-[18px]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path></svg>
                  </button>
                  <span className="text-[11px] sm:text-xs">47</span>
                </div>

                <div className="flex items-center space-x-1">
                  <div className="relative" data-headlessui-state="">
                    <button
                      aria-label="Tip"
                      className="text-gray-500 hover:bg-gray-300/20 rounded-full p-1.5 outline-offset-2"
                      type="button"
                    >
                    <svg class="w-[15px] sm:w-[18px]" fill="none" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><title>Tip Icon</title><path clip-rule="evenodd" d="M3.75 10C3.75 8.67193 4.55747 7.37779 6.05206 6.3814C7.54141 5.3885 9.64214 4.75 12 4.75C14.3579 4.75 16.4586 5.3885 17.9479 6.3814C19.4425 7.37779 20.25 8.67193 20.25 10C20.25 10.639 20.0631 11.2702 19.7026 11.8641C19.1519 12.7679 18.1981 13.58 16.9577 14.1822C15.5863 14.8465 13.8744 15.25 12 15.25C10.1255 15.25 8.41356 14.8465 7.04209 14.1821C5.80229 13.5802 4.84886 12.7685 4.29806 11.8651C3.93716 11.2709 3.75 10.6394 3.75 10ZM20.2305 13.6406C19.5393 14.3929 18.6452 15.0328 17.6103 15.5329C16.0141 16.3058 14.0743 16.75 12 16.75C9.92449 16.75 7.98365 16.3053 6.38698 15.5316C5.35327 15.0316 4.46006 14.3922 3.76949 13.6406C3.75654 13.7597 3.75 13.8795 3.75 14C3.75 15.3281 4.55747 16.6222 6.05206 17.6186C7.54141 18.6115 9.64214 19.25 12 19.25C14.3579 19.25 16.4586 18.6115 17.9479 17.6186C19.4425 16.6222 20.25 15.3281 20.25 14C20.25 13.8795 20.2435 13.7597 20.2305 13.6406ZM2.25 10V14C2.25 15.9856 3.45725 17.6915 5.22001 18.8667C6.98802 20.0454 9.3873 20.75 12 20.75C14.6127 20.75 17.012 20.0454 18.78 18.8667C20.5428 17.6915 21.75 15.9856 21.75 14V10C21.75 8.01436 20.5428 6.3085 18.78 5.13332C17.012 3.95465 14.6127 3.25 12 3.25C9.3873 3.25 6.98802 3.95465 5.22001 5.13332C3.45725 6.3085 2.25 8.01436 2.25 10ZM15.5638 12.6483C16.5544 12.0912 17.5 11.1107 17.5 9.75C17.5 8.76029 16.8026 8.16981 16.3449 7.91231C15.8401 7.62836 15.2437 7.5 14.6667 7.5L14.6522 7.50003C14.4597 7.30196 14.2488 7.14511 14.0534 7.0287C13.4549 6.67207 12.7254 6.5 12 6.5C11.2746 6.5 10.5451 6.67207 9.94656 7.0287C9.75119 7.14511 9.54031 7.30196 9.3478 7.50003L9.33333 7.5C8.75631 7.5 8.15993 7.62836 7.65513 7.91231C7.19736 8.16981 6.5 8.76029 6.5 9.75C6.5 11.1107 7.44563 12.0912 8.43618 12.6483C9.45743 13.2228 10.7409 13.5 12 13.5C13.2591 13.5 14.5426 13.2228 15.5638 12.6483ZM16 9.75C16 9.46889 15.725 9.22389 15.3181 9.09547C15.3049 9.0913 15.2916 9.08726 15.2781 9.08333C15.095 9.03008 14.8871 9 14.6667 9C14.4463 9 14.2384 9.03008 14.0552 9.08333C13.9681 9.10868 13.8865 9.13929 13.8118 9.1744C13.816 9.14437 13.8182 9.11399 13.8182 9.08333C13.8182 8.84441 13.6884 8.62356 13.4685 8.44444C13.1377 8.175 12.6032 8 12 8C11.3968 8 10.8623 8.175 10.5315 8.44444C10.3116 8.62356 10.1818 8.84441 10.1818 9.08333C10.1818 9.11399 10.184 9.14437 10.1882 9.1744C10.1135 9.13929 10.0319 9.10868 9.94475 9.08333C9.76161 9.03008 9.55372 9 9.33333 9C9.11295 9 8.90505 9.03008 8.7219 9.08333C8.70842 9.08726 8.69507 9.0913 8.68185 9.09547C8.27496 9.22389 8 9.46889 8 9.75C8 10.3467 8.42143 10.919 9.17158 11.341C9.92171 11.7629 10.9391 12 12 12C13.0609 12 14.0783 11.7629 14.8284 11.341C15.5786 10.919 16 10.3467 16 9.75Z" fill="currentColor" fill-rule="evenodd"></path></svg>
                    </button>
                  </div>
                </div>

                <div className="text-gray-500 flex items-center space-x-1">
                  <button
                    aria-label="Views"
                    className="rounded-full p-1.5 outline-offset-2 hover:bg-gray-300/20"
                    disabled=""
                    type="button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="w-[15px] sm:w-[18px]"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"></path></svg>
                  </button>
                  <span className="text-[11px] sm:text-xs">989</span>
                </div>
              </span>
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PostCard;
