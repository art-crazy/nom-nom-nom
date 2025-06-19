'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import Image from 'next/image';
import {YM_ID} from "@/config/ym.constants";
import ENV from "@/config/env.constants";

declare let ym: any;

export default function YandexMetrika() {
    const pathName = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (ENV !== 'dev') {
            console.log('HIT!')

            ym(YM_ID, 'hit', window.location.href);
        }
    }, [pathName, searchParams]);

    if (ENV === 'dev') {
        return null;
    }

    return (
        <>
            <Script id="yandex-metrika">
                {`
                    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();
                    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                    ym(${YM_ID}, "init", {
                    defer: true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true});
                `}
            </Script>
            <noscript>
                <div>
                    {/* <img src="https://mc.yandex.ru/watch/96878065" */}
                    {/*     style={{position: "absolute", left: "-9999px"}} */}
                    {/*     alt="" */}
                    {/* /> */}
                    <Image
                        src={`https://mc.yandex.ru/watch/${YM_ID}`}
                        layout="fixed"
                        width={1}
                        height={1}
                        alt=""
                    />
                </div>
            </noscript>
        </>
    );
}
