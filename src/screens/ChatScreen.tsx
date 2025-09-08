import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

// Define types
interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: string;
}

interface BotResponses {
  [key: string]: string;
}

interface ChatScreenProps {
  navigation: any;
}

const ChatScreen: React.FC<ChatScreenProps> = ({ navigation }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your Ikman.lk assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date().toLocaleTimeString(),
    }
  ]);
  const [inputText, setInputText] = useState<string>('');

  const botResponses: BotResponses = {
    'browse': "Great! You can browse ads by categories or search for specific items. Would you like me to help you find something specific?",
    'post': "To post an ad, click on the 'Post Ad' button in the bottom navigation. I'll guide you through the process step by step!",
    'help': "I can help you with:\n• Browsing ads\n• Posting ads\n• Search tips\n• Account settings\n\nWhat would you like to know more about?",
    'search': "You can search for items by typing keywords in the search bar. Use filters like location and category to narrow down results.",
    'default': "I'm here to help! You can ask me about browsing ads, posting ads, or any other questions about using Ikman.lk."
  };

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Generate bot response
    setTimeout(() => {
      let response = botResponses.default;
      const lowerInput = inputText.toLowerCase();

      if (lowerInput.includes('browse') || lowerInput.includes('find') || lowerInput.includes('look')) {
        response = botResponses.browse;
      } else if (lowerInput.includes('post') || lowerInput.includes('sell') || lowerInput.includes('add')) {
        response = botResponses.post;
      } else if (lowerInput.includes('help') || lowerInput.includes('how')) {
        response = botResponses.help;
      } else if (lowerInput.includes('search')) {
        response = botResponses.search;
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: response,
        isBot: true,
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputText('');
  };

  const handleQuickAction = (action: string) => {
    if (action === 'browse') {
      navigation.navigate('Home');
    } else if (action === 'post') {
      navigation.navigate('PostAd');
    }
  };

  const renderMessage = (message: Message) => (
    <View key={message.id} className={message.isBot ? "self-start mb-1 max-w-[80%]" : "self-end mb-1 max-w-[80%]"}>
      <Text className={message.isBot ? "text-base leading-5 px-4 py-3 rounded-[18px] bg-white text-gray-700" : "text-base leading-5 px-4 py-3 rounded-[18px] bg-[#149777] text-white"}>
        {message.text}
      </Text>
      <Text className={message.isBot ? "text-xs mt-1 px-4 text-gray-500" : "text-xs mt-1 px-4 text-gray-500 text-right"}>
        {message.timestamp}
      </Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="flex-row items-center px-4 py-4 bg-white border-b border-gray-200">
        <View className="w-10 h-10 rounded-full bg-[#149777] justify-center items-center mr-3">
          <Feather name="message-circle" size={24} color="#fff" />
        </View>
        <View className="flex-1">
          <Text className="text-lg font-bold text-gray-700">Ikman.lk Assistant</Text>
          <Text className="text-sm text-[#149777] mt-0.5">Online • Always ready to help</Text>
        </View>
      </View>

      {/* Quick Action Buttons */}
      <View className="flex-row px-4 py-4 bg-white border-b border-gray-200 gap-3">
        <TouchableOpacity 
          className="flex-1 flex-row items-center justify-center py-3 px-4 border border-[#149777] rounded-full bg-[#f8fffe]"
          onPress={() => handleQuickAction('browse')}
        >
          <Feather name="search" size={20} color="#149777" />
          <Text className="text-sm font-semibold text-[#149777] ml-2">Browse Ads</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="flex-1 flex-row items-center justify-center py-3 px-4 border border-[#149777] rounded-full bg-[#f8fffe]"
          onPress={() => handleQuickAction('post')}
        >
          <Feather name="plus-circle" size={20} color="#149777" />
          <Text className="text-sm font-semibold text-[#149777] ml-2">Post an Ad</Text>
        </TouchableOpacity>
      </View>

      {/* Messages */}
      <ScrollView 
        className="flex-1 px-4 py-2"
        showsVerticalScrollIndicator={false}
      >
        {messages.map(renderMessage)}
      </ScrollView>

      {/* Input Container */}
      <View className="flex-row items-end px-4 py-3 bg-white border-t border-gray-200">
        <TextInput
          className="flex-1 border border-gray-300 rounded-full px-4 py-3 text-base max-h-[100px] mr-3"
          placeholder="Type your message..."
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={sendMessage}
          multiline
        />
        <TouchableOpacity 
          className={inputText.trim() ? "w-10 h-10 rounded-full bg-[#149777] justify-center items-center" : "w-10 h-10 rounded-full bg-gray-200 justify-center items-center"}
          onPress={sendMessage}
        >
          <Feather name="send" size={20} color={inputText.trim() ? "#fff" : "#666"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;