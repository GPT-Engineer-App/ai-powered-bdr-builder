import React, { useState } from "react";
import { Box, Heading, Text, VStack, HStack, Input, Button, Image, Textarea, useToast } from "@chakra-ui/react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
    setIsLoading(false);

    // Show success toast
    toast({
      title: "Message Sent",
      description: "Our AI-powered BDR will get back to you soon!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          AI-Powered Business Development
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Our AI-driven BDR is here to assist you with your business needs. Submit your inquiry below and our intelligent system will provide a tailored response.
        </Text>
        <HStack justify="center">
          <Image src="https://images.unsplash.com/photo-1527430253228-e93688616381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHJvYm90JTIwYXNzaXN0YW50fGVufDB8fHx8MTcxMzAzNjIxNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Robot" boxSize="200px" />
          <FaRobot size={150} color="teal.500" />
        </HStack>
        <Box as="form" onSubmit={handleSubmit} border="1px" borderColor="gray.200" borderRadius="md" padding={8}>
          <VStack spacing={4} align="stretch">
            <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <Input placeholder="Your Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
            <Button type="submit" colorScheme="teal" size="lg" rightIcon={<FaPaperPlane />} isLoading={isLoading}>
              Send Inquiry
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
