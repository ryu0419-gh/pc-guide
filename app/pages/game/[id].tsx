// 森川さん作成ページ
import { useRouter } from "next/router";

export default function GameDetail() {
  const router = useRouter();
  const { id } = router.query;

  return <h2 className="text-xl">ゲーム詳細ページ（ID: {id}）</h2>;
}
