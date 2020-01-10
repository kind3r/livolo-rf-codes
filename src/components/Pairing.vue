<template>
  <div class="container border border-top-0 p-2">
    <h2>
      <span class="badge badge-info">3</span> Pair the switches by teaching them the remote codes
    </h2>
    <!-- <div class="alert border border-primary"> -->
    <p>For each gang of every switch you have to do the following:</p>
    <ul>
      <li>Teach the gang the TOGGLE code</li>
      <li>Teach the gang the ON scene</li>
      <li>Teach the gang the OFF scene</li>
      <li>Teach the gang the DIM LEARN code (only for dimmers, allows usage of DIM + and DIM - scripts)</li>
    </ul>
    <p>Below you will find an example for the first gang of the first switch you defined:</p>
    <div class="alert alert-primary border border-primary">
      <dl>
        <dt>
          <span class="badge badge-pill badge-success">1</span> Teach the gang
          <code>{{value[0].names[0]}}</code> the TOGGLE code
        </dt>
        <dd>
          <ul>
            <li>
              Press and hold the gang until you hear a
              <mark>beep</mark> (about 5 seconds).
            </li>
            <li>
              Run the script named
              <code>{{value[0].names[0]}} TOGGLE</code>.
              You should hear another
              <mark>beep</mark> signifying that the switch learned the new remote code.
              <br />
            </li>
            <li>
              <span class="badge badge-secondary">Optional</span> Run the script named
              <code>{{value[0].names[0]}} TOGGLE</code> to check if the switch turns on and off.
            </li>
          </ul>
        </dd>
        <dt>
          <span class="badge badge-pill badge-success">2</span> Teach the gang
          <code>{{value[0].names[0]}}</code> the ON code
        </dt>
        <dd>
          <ul>
            <li>
              Press and hold the gang until you hear a
              <mark>beep</mark> (about 5 seconds).
            </li>
            <li>
              <span class="badge badge-success">Important</span> Press (not hold) the gang until it is turned on. You have to press it at least once.
              For example if the gang is already on you have to press once to turn it off and then once more to turn it back on again.
            </li>
            <li>
              Run the script named
              <code>{{value[0].names[0]}} ON</code>.
              You should hear another
              <mark>beep</mark> signifying that the switch learned the new remote scene code.
              <br />
            </li>
            <li>
              <span class="badge badge-secondary">Optional</span> Turn the gang off and run the script named
              <code>{{value[0].names[0]}} ON</code>
              to check if the switch turns on.
            </li>
          </ul>
        </dd>
        <dt>
          <span class="badge badge-pill badge-success">3</span> Teach the gang
          <code>{{value[0].names[0]}}</code> the OFF code
        </dt>
        <dd>
          <ul>
            <li>
              Press and hold the gang until you hear a
              <mark>beep</mark> (about 5 seconds).
            </li>
            <li>
              <span class="badge badge-success">Important</span> Press (not hold) the gang until it is turned off. You have to press it at least once.
              For example if the gang is already off you have to press once to turn it on and then once more to turn it back off again.
            </li>
            <li>
              Run the script named
              <code>{{value[0].names[0]}} OFF</code>.
              You should hear another
              <mark>beep</mark> signifying that the switch learned the new remote scene code.
              <br />
            </li>
            <li>
              <span class="badge badge-secondary">Optional</span> Turn the gang on and run the script named
              <code>{{value[0].names[0]}} OFF</code>
              to check if the switch turns off.
            </li>
          </ul>
        </dd>
        <template v-if="value[0].dimmer">
          <dt>
            <span class="badge badge-pill badge-success">4</span> Teach the gang
            <code>{{value[0].names[0]}}</code> the DIM LEARN code
          </dt>
          <dd>
          <ul>
            <li>
              Press and hold the gang until you hear a
              <mark>beep</mark> (about 5 seconds).
            </li>
            <li>
              Run the script named
              <code>{{value[0].names[0]}} DIM LEARN</code>.
              You should hear another
              <mark>beep</mark> signifying that the switch learned the new remote code.
              <br />
            </li>
            <li>
              <span class="badge badge-secondary">Optional</span> Run the script named
              <code>{{value[0].names[0]}} DIM LEARN</code> to check if the switch turns on and off.
            </li>
            <li>
              <span class="badge badge-secondary">Optional</span> Run the scripts named
              <code>{{value[0].names[0]}} DIM +</code> and <code>{{value[0].names[0]}} DIM -</code> to check if the switch dims up or down.
            </li>
          </ul>
        </dd>
        </template>
      </dl>
    </div>
    <!-- </div> -->
  </div>
</template>
<script>
export default {
  props: ["value"]
};
</script>