@@ .. @@
  const navigate = useNavigate();
  const [slots, setSlots] = useState<Slot[]>([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});
  const [rateLimitError, setRateLimitError] = useState<string>('');

  // Decoration is now mandatory for all venues
  useEffect(() => {
    if (!formData.decoration) {
      setFormData(prev => ({ ...prev, decoration: true }));
    }
  }, [formData.decoration, setFormData]);

  useEffect(() => {
    const fetchAvailableSlots = async () => {