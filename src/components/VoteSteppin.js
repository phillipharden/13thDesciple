

const VoteSteppin = () => {
  return (
    <section className="vote-steppin">
      <div className="vote-steppin__content">

        <p className="vote-steppin__eyebrow">
          Gospel Choice Music Awards
        </p>

        <h2 className="vote-steppin__title">
          Vote for “Steppin”
        </h2>

        <p className="vote-steppin__text">
          13th Desciple’s track <strong>“Steppin” featuring Prophocey</strong> has been
          nominated in <strong>two categories</strong> at the Gospel Choice Music Awards.
        </p>

        <ul className="vote-steppin__categories">
          <li>Artist Collaboration of the Year</li>
          <li>Group / Duo of the Year</li>
        </ul>

        <p className="vote-steppin__instructions">
          When you visit the voting page, scroll through the categories and
          select <strong>“Steppin – 13th Desciple ft. Prophocey.”</strong>
        </p>

        <a
          href="https://www.gospelchoicemusicawards.com/voting"
          target="_blank"
          rel="noopener noreferrer"
          className="vote-steppin__button"
        >
          Vote Now
        </a>

      </div>
    </section>
  );
};

export default VoteSteppin;