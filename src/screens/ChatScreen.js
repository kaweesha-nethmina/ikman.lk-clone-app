import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your Ikman.lk assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date().toLocaleTimeString(),
    }
  ]);
  const [inputText, setInputText] = useState('');

  const botResponses = {
    'browse': "Great! You can browse ads by categories or search for specific items. Would you like me to help you find something specific?",
    'post': "To post an ad, click on the 'Post Ad' button in the bottom navigation. I'll guide you through the process step by step!",
    'help': "I can help you with:\n• Browsing ads\n• Posting ads\n• Search tips\n• Account settings\n\nWhat would you like to know more about?",
    'search': "You can search for items by typing keywords in the search bar. Use filters like location and category to narrow down results.",
    'default': "I'm here to help! You can ask me about browsing ads, posting ads, or any other questions about using Ikman.lk."
  };

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    const userMessage = {
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

      const botMessage = {
        id: messages.length + 2,
        text: response,
        isBot: true,
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputText('');
  };

  const handleQuickAction = (action) => {
    if (action === 'browse') {
      navigation.navigate('Home');
    } else if (action === 'post') {
      navigation.navigate('PostAd');
    }
  };

  const renderMessage = (message) => (
    <View key={message.id} style={[
      styles.messageContainer,
      message.isBot ? styles.botMessage : styles.userMessage
    ]}>
      <Text style={[
        styles.messageText,
        message.isBot ? styles.botMessageText : styles.userMessageText
      ]}>
        {message.text}
      </Text>
      <Text style={[
        styles.timestamp,
        message.isBot ? styles.botTimestamp : styles.userTimestamp
      ]}>
        {message.timestamp}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.botAvatar}>
          <Feather name="message-circle" size={24} color="#fff" />
        </View>
        <View style={styles.headerInfo}>
          <Text style={styles.headerTitle}>Ikman.lk Assistant</Text>
          <Text style={styles.headerSubtitle}>Online • Always ready to help</Text>
        </View>
      </View>

      {/* Quick Action Buttons */}
      <View style={styles.quickActionsContainer}>
        <TouchableOpacity 
          style={styles.quickActionButton}
          onPress={() => handleQuickAction('browse')}
        >
          <Feather name="search" size={20} color="#149777" />
          <Text style={styles.quickActionText}>Browse Ads</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.quickActionButton}
          onPress={() => handleQuickAction('post')}
        >
          <Feather name="plus-circle" size={20} color="#149777" />
          <Text style={styles.quickActionText}>Post an Ad</Text>
        </TouchableOpacity>
      </View>

      {/* Messages */}
      <ScrollView 
        style={styles.messagesContainer}
        showsVerticalScrollIndicator={false}
      >
        {messages.map(renderMessage)}
      </ScrollView>

      {/* Input Container */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type your message..."
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={sendMessage}
          multiline
        />
        <TouchableOpacity 
          style={[styles.sendButton, inputText.trim() && styles.activeSendButton]}
          onPress={sendMessage}
        >
          <Feather name="send" size={20} color={inputText.trim() ? "#fff" : "#666"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  botAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#149777',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerInfo: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#149777',
    marginTop: 2,
  },
  quickActionsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    gap: 12,
  },
  quickActionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#149777',
    borderRadius: 20,
    backgroundColor: '#f8fffe',
  },
  quickActionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#149777',
    marginLeft: 8,
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  messageContainer: {
    marginVertical: 4,
    maxWidth: '80%',
  },
  botMessage: {
    alignSelf: 'flex-start',
  },
  userMessage: {
    alignSelf: 'flex-end',
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 18,
  },
  botMessageText: {
    backgroundColor: '#fff',
    color: '#333',
  },
  userMessageText: {
    backgroundColor: '#149777',
    color: '#fff',
  },
  timestamp: {
    fontSize: 12,
    marginTop: 4,
    paddingHorizontal: 16,
  },
  botTimestamp: {
    color: '#666',
  },
  userTimestamp: {
    color: '#666',
    textAlign: 'right',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    maxHeight: 100,
    marginRight: 12,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeSendButton: {
    backgroundColor: '#149777',
  },
});

export default ChatScreen;