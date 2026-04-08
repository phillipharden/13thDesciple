import { useEffect } from "react";
import { supabase } from "../lib/supabase";

const SupabaseTest = () => {
  useEffect(() => {
    const testConnection = async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*");

      console.log("Supabase Test:", { data, error });
    };

    testConnection();
  }, []);

  return (
    <div className="container py-5">
      <h1>Supabase Test</h1>
      <p>Check console for results</p>
    </div>
  );
};

export default SupabaseTest;