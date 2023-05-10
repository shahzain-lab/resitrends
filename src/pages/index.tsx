import Header from '@/templates/Header'
import Services from '@/templates/Services'
import { Stack } from '@chakra-ui/react'
import React from 'react'

// ** chat 
import dynamic from 'next/dynamic';
import 'react-chat-widget/lib/styles.css';

const ChatWidget = dynamic(() => import("react-chat-widget").then((mod) => mod.Widget) as any, {
  loading: () => <>Loading&nbsp;&hellip;</>,
  ssr: false,
}) as any;

const index = () => {

  
  const handleNewUserMessage = (newMessage: string) => {
    console.log(`New message incoming! ${newMessage}`);

    // Now send the message throught the backend API
  };

  return (
    <Stack>
        <Header />

        <Services />

          <ChatWidget 
             handleNewUserMessage={handleNewUserMessage}
          />
    </Stack>
  )
}

export default index