import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface City {
  id: string;
  city_name: string;
}

export function useCities() {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCities = async () => {
      setLoading(true);
      setError(null);
      const { data, error: dbError } = await (supabase as any)
        .from("ameex_cities")
        .select("id, city_name")
        .order("city_name", { ascending: true });

      if (dbError) {
        setError("تعذر تحميل المدن، المرجو المحاولة مرة أخرى");
        console.error("Cities fetch error:", dbError);
      } else {
        setCities(data || []);
      }
      setLoading(false);
    };

    fetchCities();
  }, []);

  return { cities, loading, error };
}
