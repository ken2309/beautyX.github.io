export interface IBanner {
      id: number,
      name: string | null,
      type: string | null,
      imageURL: string | null,
      htmlTemplate: string | null,
      url: string | null,
      target: string | null,
      width: number,
      height: number,
      view_count: number,
      expires_at: string | null,
      origin_type: string | null,
      origin_id: string | null,
      deleted_at: string | null,
      created_at: string,
      updated_at: string,
      platform: string
}