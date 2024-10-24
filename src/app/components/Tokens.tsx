import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from "@fortawesome/free-solid-svg-icons"

export default function Tokens() {
  return (
      <>
          <Link href='/token-topup' className="block mt-2 text-center">
              <FontAwesomeIcon icon={faCoins} className="text-yellow-500"/>
              <span className="text-white pl-1"> 0 Tokens</span>
          </Link>

      </>
  )
}
