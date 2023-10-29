
import Image from "next/image";

export default function Home() {
  return (
    <div className="hero-secion section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>Welcome to my website</h1>
            <p>A welcome is a kind of greeting designed to introduce a person to a new place or situation, and to make them feel at ease. The term can similarly be used to describe the feeling of being accepted on the part of the new person. "Wil cuman," an Old English welcome phrase, which was used over a thousand years ago.
            </p>
            <button className="btn btn-danger mx-2">Primary</button>
            <button className="btn btn-outline-secondary mx-2"> Secondary</button>
          </div>
          <div className="col-lg-6">
            <Image src="/pc.jpg" alt="pc" width={600}
            height={300}/>
          </div>
        </div>
      </div>
    </div>
  )
}
