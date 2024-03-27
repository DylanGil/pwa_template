"use client"
import React from "react";
import { MouseEventHandler, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

const base64ToUint8Array = (base64: string) => {
  const padding = '='.repeat((4 - (base64.length % 4)) % 4)
  const b64 = (base64 + padding).replace(/-/g, '+').replace(/_/g, '/')

  const rawData = window.atob(b64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

export default function Home() {
  
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [subscription, setSubscription] = useState<PushSubscription | null>(null)
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null)

  useEffect(() => {
    console.log(navigator);
    
    if ('serviceWorker' in navigator && typeof window !== 'undefined') {
      // run only in browser
      navigator.serviceWorker.ready.then(reg => {
        reg.pushManager.getSubscription().then(sub => {
          if (sub && !(sub.expirationTime && Date.now() > sub.expirationTime - 5 * 60 * 1000)) {
            setSubscription(sub)
            setIsSubscribed(true)
          }
        })
        setRegistration(reg)
      })
    }
  }, [])


  const subscribeButtonOnClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>| React.TouchEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log('subscribing web push')
    const result = await Notification.requestPermission()

    console.log(result)
    console.log(registration)
    if (registration) {
      const sub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: base64ToUint8Array(process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY ||  '')
      })
      // TODO: you should call your API to save subscription data on server in order to send web push notification from server
      setSubscription(sub)
      setIsSubscribed(true)
      console.log('web push subscribed!')
      console.log(sub)
    }
  }

  const unsubscribeButtonOnClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>| React.TouchEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (subscription) {
      await subscription.unsubscribe()
      // TODO: you should call your API to delete or invalidate subscription data on server
      setSubscription(null)
      setIsSubscribed(false)
      console.log('web push unsubscribed!')
    }
  }

  const sendNotificationButtonOnClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.TouchEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (subscription == null) {
      console.error('web push not subscribed')
      return
    }

    await fetch('/api/notification', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        subscription
      })
    })
  }
  return (
    <>
      <button onClick={(event) => subscribeButtonOnClick(event)} onTouchStart={async (event) => {
      }} disabled={isSubscribed}>
        Subscribe
      </button> <br /><br /><br /><br /><br /><br />
      <button
        onClick={(event) => unsubscribeButtonOnClick(event)}
        onTouchStart={(event) => unsubscribeButtonOnClick(event)}
        disabled={!isSubscribed}
      >
        Unsubscribe
      </button><br /><br /><br /><br /><br /><br />
      <button onClick={(event) => sendNotificationButtonOnClick(event)} onTouchStart={(event) => sendNotificationButtonOnClick(event)} disabled={!isSubscribed}>
        Send Notification
      </button>
    </>
  );
}
