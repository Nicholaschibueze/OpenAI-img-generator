const generateImage = async (req, res) => {
  const { prompt, size } = req.body;

  if (!prompt) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a prompt',
    });
  }

  // Map size inputs to pixel dimensions
  const width = size === 'small' ? 256 : size === 'medium' ? 512 : 1024;
  const height = width;

  try {
    const encodedPrompt = encodeURIComponent(prompt);
    const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=${width}&height=${height}&nologo=true`;

    res.status(200).json({
      success: true,
      data: imageUrl,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'The image could not be generated',
    });
  }
};

module.exports = { generateImage };
