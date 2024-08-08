export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      comment: {
        Row: {
          comment: string;
          created_at: string | null;
          id: number;
          post_id: string | null;
          updated_at: string | null;
          user_id: string | null;
        };
        Insert: {
          comment: string;
          created_at?: string | null;
          id?: number;
          post_id?: string | null;
          updated_at?: string | null;
          user_id?: string | null;
        };
        Update: {
          comment?: string;
          created_at?: string | null;
          id?: number;
          post_id?: string | null;
          updated_at?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "comment_post_id_fkey";
            columns: ["post_id"];
            isOneToOne: false;
            referencedRelation: "post";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "comment_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      post: {
        Row: {
          comment_count: number | null;
          content: string | null;
          created_at: string | null;
          id: string;
          post_image: string | null;
          post_type: Database["public"]["Enums"]["survey_type"];
          title: string | null;
          updated_at: string | null;
          user_id: string | null;
        };
        Insert: {
          comment_count?: number | null;
          content?: string | null;
          created_at?: string | null;
          id?: string;
          post_image?: string | null;
          post_type: Database["public"]["Enums"]["survey_type"];
          title?: string | null;
          updated_at?: string | null;
          user_id?: string | null;
        };
        Update: {
          comment_count?: number | null;
          content?: string | null;
          created_at?: string | null;
          id?: string;
          post_image?: string | null;
          post_type?: Database["public"]["Enums"]["survey_type"];
          title?: string | null;
          updated_at?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "post_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "user_info";
            referencedColumns: ["id"];
          }
        ];
      };
      question_form: {
        Row: {
          created_at: string | null;
          id: number;
          question_options: Json | null;
          question_title: string;
          question_type: Database["public"]["Enums"]["question_type"] | null;
          survey_id: number | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          question_options?: Json | null;
          question_title: string;
          question_type?: Database["public"]["Enums"]["question_type"] | null;
          survey_id?: number | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          question_options?: Json | null;
          question_title?: string;
          question_type?: Database["public"]["Enums"]["question_type"] | null;
          survey_id?: number | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "question_form_survey_id_fkey";
            columns: ["survey_id"];
            isOneToOne: false;
            referencedRelation: "survey_form";
            referencedColumns: ["id"];
          }
        ];
      };
      question_post: {
        Row: {
          created_at: string | null;
          id: number;
          question_options: Json | null;
          question_title: string;
          question_type: Database["public"]["Enums"]["question_type"] | null;
          survey_order: number | null;
          survey_post_id: number | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string | null;
          id: number;
          question_options?: Json | null;
          question_title: string;
          question_type?: Database["public"]["Enums"]["question_type"] | null;
          survey_order?: number | null;
          survey_post_id?: number | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          question_options?: Json | null;
          question_title?: string;
          question_type?: Database["public"]["Enums"]["question_type"] | null;
          survey_order?: number | null;
          survey_post_id?: number | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "question_post_survey_post_id_fkey";
            columns: ["survey_post_id"];
            isOneToOne: false;
            referencedRelation: "survey_post";
            referencedColumns: ["id"];
          }
        ];
      };
      response: {
        Row: {
          answer: string;
          created_at: string | null;
          id: number;
          question_id: number | null;
          updated_at: string | null;
          user_id: string | null;
        };
        Insert: {
          answer: string;
          created_at?: string | null;
          id: number;
          question_id?: number | null;
          updated_at?: string | null;
          user_id?: string | null;
        };
        Update: {
          answer?: string;
          created_at?: string | null;
          id?: number;
          question_id?: number | null;
          updated_at?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "response_question_id_fkey";
            columns: ["question_id"];
            isOneToOne: false;
            referencedRelation: "question_post";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "response_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      studywithoutrls: {
        Row: {
          body: string | null;
          created_at: string;
          id: number;
          title: string | null;
        };
        Insert: {
          body?: string | null;
          created_at?: string;
          id?: number;
          title?: string | null;
        };
        Update: {
          body?: string | null;
          created_at?: string;
          id?: number;
          title?: string | null;
        };
        Relationships: [];
      };
      survey_form: {
        Row: {
          created_at: string | null;
          id: number;
          survey_name: string;
          updated_at: string | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          survey_name: string;
          updated_at?: string | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          survey_name?: string;
          updated_at?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "survey_form_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      survey_post: {
        Row: {
          created_at: string | null;
          id: number;
          post_id: string | null;
          survey_name: string;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string | null;
          id: number;
          post_id?: string | null;
          survey_name: string;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          post_id?: string | null;
          survey_name?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "survey_post_post_id_fkey";
            columns: ["post_id"];
            isOneToOne: false;
            referencedRelation: "post";
            referencedColumns: ["id"];
          }
        ];
      };
      user_info: {
        Row: {
          avatar_url: string | null;
          created_at: string | null;
          email: string;
          email_verified: boolean | null;
          id: string;
          updated_at: string | null;
          user_name: string;
        };
        Insert: {
          avatar_url?: string | null;
          created_at?: string | null;
          email: string;
          email_verified?: boolean | null;
          id: string;
          updated_at?: string | null;
          user_name: string;
        };
        Update: {
          avatar_url?: string | null;
          created_at?: string | null;
          email?: string;
          email_verified?: boolean | null;
          id?: string;
          updated_at?: string | null;
          user_name?: string;
        };
        Relationships: [
          {
            foreignKeyName: "user_info_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      add_comment: {
        Args: {
          post_id: string;
          comment_text: string;
        };
        Returns: undefined;
      };
      create_post: {
        Args: {
          p_post_type: Database["public"]["Enums"]["survey_type"];
          p_title: string;
          p_content: string;
          p_post_image: string;
        };
        Returns: {
          post_id: string;
          creator_id: string;
          post_type_value: Database["public"]["Enums"]["survey_type"];
          title: string;
          content: string;
          post_image: string;
          comment_count: number;
          created_at: string;
          updated_at: string;
        }[];
      };
      delete_account: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
      get_filtered_posts_by_limit: {
        Args: {
          filter_type: string;
          page_number: number;
          page_size: number;
        };
        Returns: {
          id: string;
          user_id: string;
          post_type: Database["public"]["Enums"]["survey_type"];
          title: string;
          content: string;
          post_image: string;
          created_at: string;
          updated_at: string;
          comment_count: number;
          user_name: string;
          avatar_url: string;
        }[];
      };
      get_post_by_post_id: {
        Args: {
          post_id: string;
        };
        Returns: {
          id: string;
          post_type: Database["public"]["Enums"]["survey_type"];
          title: string;
          content: string;
          post_image: string;
          user_id: string;
          user_name: string;
          avatar_url: string;
          created_at: string;
          updated_at: string;
          comments: Json;
        }[];
      };
      migrate_user_data: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
      update_user_nickname: {
        Args: {
          user_id: string;
          new_nickname: string;
        };
        Returns: undefined;
      };
    };
    Enums: {
      mood: "sad" | "ok" | "happy";
      question_type: "choice" | "essay";
      survey_type: "normal" | "survey";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] & PublicSchema["Views"]) | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] & PublicSchema["Views"])
  ? (PublicSchema["Tables"] & PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema["Enums"] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
