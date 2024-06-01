import { useState } from "react";
import { Container, VStack, Box, Text, Button, Input, Textarea, HStack, IconButton } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [editingPostId, setEditingPostId] = useState(null);
  const [editingPostContent, setEditingPostContent] = useState("");

  const handleCreatePost = () => {
    if (newPost.trim()) {
      setPosts([...posts, { id: Date.now(), content: newPost }]);
      setNewPost("");
    }
  };

  const handleEditPost = (id) => {
    const post = posts.find((post) => post.id === id);
    setEditingPostId(id);
    setEditingPostContent(post.content);
  };

  const handleSaveEdit = () => {
    setPosts(posts.map((post) => (post.id === editingPostId ? { ...post, content: editingPostContent } : post)));
    setEditingPostId(null);
    setEditingPostContent("");
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <Container centerContent maxW="container.md" py={4}>
      <VStack spacing={4} width="100%">
        <Box width="100%">
          <Input
            placeholder="What's on your mind?"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <Button mt={2} colorScheme="blue" onClick={handleCreatePost}>
            Post
          </Button>
        </Box>
        {posts.map((post) => (
          <Box key={post.id} p={4} borderWidth="1px" borderRadius="md" width="100%">
            {editingPostId === post.id ? (
              <>
                <Textarea
                  value={editingPostContent}
                  onChange={(e) => setEditingPostContent(e.target.value)}
                />
                <Button mt={2} colorScheme="green" onClick={handleSaveEdit}>
                  Save
                </Button>
              </>
            ) : (
              <>
                <Text>{post.content}</Text>
                <HStack mt={2} spacing={2}>
                  <IconButton
                    aria-label="Edit"
                    icon={<FaEdit />}
                    size="sm"
                    onClick={() => handleEditPost(post.id)}
                  />
                  <IconButton
                    aria-label="Delete"
                    icon={<FaTrash />}
                    size="sm"
                    onClick={() => handleDeletePost(post.id)}
                  />
                </HStack>
              </>
            )}
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;